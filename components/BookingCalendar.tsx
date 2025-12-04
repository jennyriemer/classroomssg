import React, { useMemo, useState } from 'react';
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon } from 'lucide-react';
import { AvailabilityRule } from '../types';

interface BookingCalendarProps {
  availability?: AvailabilityRule;
  timeSlots?: string[];
  initialYear?: number;
  initialMonth?: number; // 0-11
  onSelect?: (dateISO: string) => void;
}

function startOfMonth(d: Date) {
  return new Date(d.getFullYear(), d.getMonth(), 1);
}
function endOfMonth(d: Date) {
  return new Date(d.getFullYear(), d.getMonth() + 1, 0);
}
function addMonths(d: Date, months: number) {
  return new Date(d.getFullYear(), d.getMonth() + months, 1);
}
function formatISO(d: Date) {
  return d.toISOString().slice(0, 10);
}

function sameDay(a: Date, b: Date) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

function weeksInMonthMatrix(year: number, month: number) {
  // Returns a 6x7 grid of Date objects covering the month (Sunday->Saturday)
  const first = new Date(year, month, 1);
  const start = new Date(first);
  const day = first.getDay(); // 0 (Sun) - 6 (Sat)
  start.setDate(first.getDate() - day);
  const grid: Date[][] = [];
  for (let w = 0; w < 6; w++) {
    const row: Date[] = [];
    for (let d = 0; d < 7; d++) {
      const cell = new Date(start);
      cell.setDate(start.getDate() + w * 7 + d);
      row.push(cell);
    }
    grid.push(row);
  }
  return grid;
}

function isAvailable(date: Date, rule?: AvailabilityRule): boolean {
  if (!rule) return false;
  if (rule.type === 'dates') {
    const iso = formatISO(date);
    return rule.datesISO.includes(iso);
  }
  // weekly rule – compute using UTC midnight to avoid DST/timezone drift
  const startLocal = new Date(rule.startISO + 'T00:00:00');
  // normalize to UTC midnight for both dates
  const startUTC = Date.UTC(startLocal.getFullYear(), startLocal.getMonth(), startLocal.getDate());
  const dateUTC = Date.UTC(date.getFullYear(), date.getMonth(), date.getDate());
  if (dateUTC < startUTC) return false;
  if (date.getDay() !== rule.weekday) return false; // still compare local weekday for user-friendly grid
  const diffDays = Math.floor((dateUTC - startUTC) / (24 * 60 * 60 * 1000));
  const diffWeeks = Math.floor(diffDays / 7);
  const interval = rule.intervalWeeks ?? 1;
  return diffWeeks % interval === 0;
}

const DAY_NAMES = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const BookingCalendar: React.FC<BookingCalendarProps> = ({
  availability,
  timeSlots = ['9:00 AM - 1:00 PM'],
  initialYear = 2025,
  initialMonth = 0,
  onSelect,
}) => {
  const [view, setView] = useState(new Date(initialYear, initialMonth, 1));
  const [selected, setSelected] = useState<Date | null>(null);

  const grid = useMemo(() => weeksInMonthMatrix(view.getFullYear(), view.getMonth()), [view]);
  const monthStart = startOfMonth(view);
  const monthEnd = endOfMonth(view);

  const handlePick = (d: Date) => {
    setSelected(d);
    onSelect?.(formatISO(d));
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2 font-semibold text-brand-dark">
          <CalendarIcon className="w-4 h-4 text-brand-green" />
          <span>Click a date to browse availability</span>
        </div>
        <div className="flex items-center gap-1">
          <button
            type="button"
            aria-label="Previous month"
            onClick={() => setView(addMonths(view, -1))}
            className="p-1 rounded hover:bg-brand-light text-brand-dark"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="px-2 text-sm font-medium text-brand-dark">
            {MONTH_NAMES[view.getMonth()]} {view.getFullYear()}
          </div>
          <button
            type="button"
            aria-label="Next month"
            onClick={() => setView(addMonths(view, 1))}
            className="p-1 rounded hover:bg-brand-light text-brand-dark"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-1 text-xs select-none">
        {DAY_NAMES.map((d) => (
          <div key={d} className="text-center text-gray-500 py-1">{d}</div>
        ))}
        {grid.flat().map((d, i) => {
          const inMonth = d >= monthStart && d <= monthEnd;
          const available = isAvailable(d, availability);
          const isSelected = selected && sameDay(selected, d);
          const styles = available
            ? 'bg-[#e8f0de] text-brand-dark border border-brand-green/40 hover:bg-[#dfe9d2]'
            : 'bg-gray-100 text-gray-400 border border-gray-200 cursor-default';

          return (
            <button
              key={i}
              type="button"
              disabled={!available || !inMonth}
              onClick={() => available && inMonth && handlePick(d)}
              className={`h-9 rounded ${styles} ${isSelected ? 'ring-2 ring-brand-green font-semibold' : ''}`}
            >
              {d.getDate()}
            </button>
          );
        })}
      </div>

      <div className="mt-3">
        <div className="text-sm font-semibold text-brand-dark mb-1">Available Times</div>
        <div className="flex flex-wrap gap-2">
          {(selected ? timeSlots : []).map((slot) => (
            <span
              key={slot}
              className="px-2.5 py-1 text-xs rounded-full bg-brand-green text-white"
            >
              {slot}
            </span>
          ))}
          {!selected && (
            <span className="text-xs text-gray-500">Select a date to see times</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingCalendar;
