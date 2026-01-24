"use client";

import React, { useState, useMemo, useEffect, useRef } from 'react';

// Icons implemented as simple SVG components to keep it lightweight
const PhCalendarDots = ({ className }: { className?: string }) => (
    <svg className={className} width="20" height="20" viewBox="0 0 256 256" fill="currentColor">
        <path d="M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Zm0,176H48V80H208V208ZM72,128a12,12,0,1,1,12,12A12,12,0,0,1,72,128Zm56,0a12,12,0,1,1,12,12A12,12,0,0,1,128,128Zm56,0a12,12,0,1,1,12,12A12,12,0,0,1,184,128Zm-112,48a12,12,0,1,1,12,12A12,12,0,0,1,72,176Zm56,0a12,12,0,1,1,12,12A12,12,0,0,1,128,176Zm56,0a12,12,0,1,1,12,12A12,12,0,0,1,184,176Z" />
    </svg>
);

const PhCaretLeft = ({ className }: { className?: string }) => (
    <svg className={className} width="16" height="16" viewBox="0 0 256 256" fill="currentColor">
        <path d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z" />
    </svg>
);

const PhCaretRight = ({ className }: { className?: string }) => (
    <svg className={className} width="16" height="16" viewBox="0 0 256 256" fill="currentColor">
        <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z" />
    </svg>
);

interface Props {
    value?: string | null;
    onChange: (value: string | null) => void;
    label?: string;
    placeholder?: string;
    required?: boolean;
    error?: string;
    minDate?: Date;
    maxDate?: Date;
    id?: string;
    className?: string;
}

interface CalendarDay {
    date: Date;
    isCurrentMonth: boolean;
    disabled: boolean;
}

const monthNames = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
];

const dayNames = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

export default function DatePicker({
    value,
    onChange,
    label,
    placeholder = 'Select a date',
    required,
    error,
    minDate,
    maxDate,
    id = `datepicker-${Math.random().toString(36).substr(2, 9)}`,
    className,
}: Props) {
    const [isOpen, setIsOpen] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const [currentDate, setCurrentDate] = useState(new Date());
    const [showMonthPicker, setShowMonthPicker] = useState(false);
    const [showYearPicker, setShowYearPicker] = useState(false);

    const dropdownRef = useRef<HTMLDivElement>(null);
    const inputContainerRef = useRef<HTMLDivElement>(null);

    // Initialize from value
    const selectedDate = useMemo(() => {
        if (!value) return null;
        const date = new Date(value);
        return isNaN(date.getTime()) ? null : date;
    }, [value]);

    useEffect(() => {
        if (selectedDate) {
            setCurrentDate(new Date(selectedDate));
        }
    }, [selectedDate]);

    const isFilled = !!value;

    // Responsive Variant Logic adapted to the project's Luxury Theme
    const variantClass = useMemo(() => {
        if (error) return 'border-red-500 bg-red-500/10';
        if (isFocused || isOpen) return 'border-(--deep-red) bg-(--warm-white)/10';
        if (isFilled) return 'border-(--warm-white)/40 bg-(--warm-white)/10 font-semibold';
        return 'border-(--warm-white)/20 bg-(--warm-white)/5';
    }, [error, isFocused, isOpen, isFilled]);

    const formattedDate = useMemo(() => {
        if (!selectedDate) return '';
        return selectedDate.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
        });
    }, [selectedDate]);

    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();
    const currentMonthName = monthNames[currentMonth];

    const minDateObj = minDate ? new Date(minDate) : null;
    const maxDateObj = maxDate ? new Date(maxDate) : null;

    const availableYears = useMemo(() => {
        const nowYear = new Date().getFullYear();
        const startYear = minDateObj?.getFullYear() ?? nowYear - 100;
        const endYear = maxDateObj?.getFullYear() ?? nowYear + 10;
        return Array.from({ length: endYear - startYear + 1 }, (_, i) => endYear - i);
    }, [minDateObj, maxDateObj]);

    const canNavigatePrevious = useMemo(() => {
        if (!minDateObj) return true;
        const prevMonth = new Date(currentYear, currentMonth - 1, 1);
        return prevMonth >= new Date(minDateObj.getFullYear(), minDateObj.getMonth(), 1);
    }, [currentYear, currentMonth, minDateObj]);

    const canNavigateNext = useMemo(() => {
        if (!maxDateObj) return true;
        const nextMonth = new Date(currentYear, currentMonth + 1, 1);
        return nextMonth <= new Date(maxDateObj.getFullYear(), maxDateObj.getMonth(), 1);
    }, [currentYear, currentMonth, maxDateObj]);

    const calendarDays = useMemo(() => {
        const firstDay = new Date(currentYear, currentMonth, 1);
        const startDate = new Date(firstDay);
        startDate.setDate(startDate.getDate() - firstDay.getDay());

        return Array.from({ length: 42 }, (_, i) => { // Using 42 for a full 6 weeks
            const date = new Date(startDate);
            date.setDate(startDate.getDate() + i);
            const isCurrentMonth = date.getMonth() === currentMonth;
            const disabled = (minDateObj ? date < minDateObj : false) || (maxDateObj ? date > maxDateObj : false);
            return { date, isCurrentMonth, disabled };
        });
    }, [currentYear, currentMonth, minDateObj, maxDateObj]);

    // Methods
    const toggleDropdown = () => setIsOpen(!isOpen);
    const closeDropdown = () => {
        setIsOpen(false);
        setShowMonthPicker(false);
        setShowYearPicker(false);
    };

    const selectDate = (date: Date) => {
        onChange(date.toISOString());
        closeDropdown();
    };

    const selectMonth = (monthIndex: number) => {
        setCurrentDate(new Date(currentYear, monthIndex, 1));
        setShowMonthPicker(false);
    };

    const selectYear = (year: number) => {
        setCurrentDate(new Date(year, currentMonth, 1));
        setShowYearPicker(false);
        setShowMonthPicker(true);
    };

    const previousMonth = () => {
        if (canNavigatePrevious) {
            setCurrentDate(new Date(currentYear, currentMonth - 1, 1));
        }
    };

    const nextMonth = () => {
        if (canNavigateNext) {
            setCurrentDate(new Date(currentYear, currentMonth + 1, 1));
        }
    };

    const clearDate = () => {
        onChange(null);
        closeDropdown();
    };

    const getDayClasses = (day: CalendarDay) => {
        const classes = ['flex h-9 items-center justify-center rounded-lg text-sm transition-all duration-150'];

        const isSelected = selectedDate && day.date.toDateString() === selectedDate.toDateString();
        const isToday = day.date.toDateString() === new Date().toDateString();

        if (day.disabled) {
            classes.push('text-white/10 cursor-not-allowed');
        } else if (!day.isCurrentMonth) {
            classes.push('text-white/20 hover:text-white/40 hover:bg-white/5');
        } else {
            classes.push('text-white/80 hover:bg-(--deep-red)/20 cursor-pointer');
        }

        if (isSelected) {
            classes.push('bg-(--deep-red) font-bold text-white shadow-lg hover:bg-(--deep-red)');
        } else if (isToday) {
            classes.push('border border-(--deep-red)/30 text-(--deep-red)');
        }

        return classes.join(' ');
    };

    // Click Outside logic
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current && !dropdownRef.current.contains(event.target as Node) &&
                inputContainerRef.current && !inputContainerRef.current.contains(event.target as Node)
            ) {
                closeDropdown();
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isOpen]);

    return (
        <div className="relative flex w-full flex-col gap-1">
            {label && (
                <label className="pl-1 text-xs font-semibold text-(--warm-white)/60 uppercase tracking-wider mb-3">
                    {label} {required && <span className="text-(--deep-red)">*</span>}
                </label>
            )}

            <div
                ref={inputContainerRef}
                className={`${variantClass} ${className || ''} relative flex h-[64px] items-center justify-between gap-2 rounded-xl border transition-all duration-300 px-6 cursor-pointer`}
                onClick={toggleDropdown}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                tabIndex={0}
            >
                <div className="flex flex-grow items-center">
                    <span className={`text-lg transition-colors ${formattedDate ? 'text-(--warm-white)' : 'text-(--warm-white)/40'}`}>
                        {formattedDate || placeholder}
                    </span>
                </div>
                <PhCalendarDots className={`transition-colors ${isOpen || isFocused ? 'text-(--deep-red)' : 'text-(--warm-white)/30'}`} />
            </div>

            {error && <p className="mt-1 text-sm text-red-500">{error}</p>}

            {isOpen && (
                <div
                    ref={dropdownRef}
                    className="absolute top-[calc(100%+8px)] left-0 z-50 w-full min-w-[300px] rounded-2xl border border-(--warm-white)/10 bg-(--near-black) shadow-2xl backdrop-blur-xl animate-in fade-in zoom-in duration-200"
                    tabIndex={-1}
                >
                    {/* Header */}
                    <div className="flex w-full items-center justify-between border-b border-(--warm-white)/5 p-4">
                        <button
                            type="button"
                            onClick={previousMonth}
                            disabled={!canNavigatePrevious}
                            className={`rounded-lg p-2 transition-colors hover:bg-(--warm-white)/5 ${!canNavigatePrevious ? 'opacity-20 cursor-not-allowed' : 'text-(--warm-white)'}`}
                        >
                            <PhCaretLeft />
                        </button>

                        <div className="flex items-center space-x-2">
                            <button
                                type="button"
                                onClick={() => { setShowMonthPicker(true); setShowYearPicker(false); }}
                                className="cursor-pointer rounded-lg px-3 py-1 text-sm font-semibold text-(--warm-white) transition-colors hover:bg-(--warm-white)/5 font-[family-name:var(--font-space-grotesk)] uppercase tracking-wider"
                            >
                                {currentMonthName}
                            </button>
                            <button
                                type="button"
                                onClick={() => { setShowYearPicker(true); setShowMonthPicker(false); }}
                                className="cursor-pointer rounded-lg px-3 py-1 text-sm font-semibold text-(--warm-white) transition-colors hover:bg-(--warm-white)/5 font-[family-name:var(--font-space-grotesk)]"
                            >
                                {currentYear}
                            </button>
                        </div>

                        <button
                            type="button"
                            onClick={nextMonth}
                            disabled={!canNavigateNext}
                            className={`rounded-lg p-2 transition-colors hover:bg-(--warm-white)/5 ${!canNavigateNext ? 'opacity-20 cursor-not-allowed' : 'text-(--warm-white)'}`}
                        >
                            <PhCaretRight />
                        </button>
                    </div>

                    <div className="p-4">
                        {showMonthPicker ? (
                            <div className="grid grid-cols-3 gap-2">
                                {monthNames.map((month, index) => (
                                    <button
                                        key={month}
                                        type="button"
                                        onClick={() => selectMonth(index)}
                                        className={`cursor-pointer rounded-lg px-3 py-3 text-sm font-medium transition-colors ${index === currentMonth ? 'bg-(--deep-red) text-white' : 'text-white/60 hover:bg-(--warm-white)/5 hover:text-white'}`}
                                    >
                                        {month}
                                    </button>
                                ))}
                            </div>
                        ) : showYearPicker ? (
                            <div className="max-h-64 overflow-y-auto grid grid-cols-4 gap-2 custom-scrollbar">
                                {availableYears.map(year => (
                                    <button
                                        key={year}
                                        type="button"
                                        onClick={() => selectYear(year)}
                                        className={`cursor-pointer rounded-lg px-3 py-3 text-sm font-medium transition-colors ${year === currentYear ? 'bg-(--deep-red) text-white' : 'text-white/60 hover:bg-(--warm-white)/5 hover:text-white'}`}
                                    >
                                        {year}
                                    </button>
                                ))}
                            </div>
                        ) : (
                            <>
                                <div className="mb-2 grid grid-cols-7 gap-1">
                                    {dayNames.map(day => (
                                        <div key={day} className="flex h-8 items-center justify-center text-[10px] font-bold text-white/30 uppercase tracking-widest">
                                            {day}
                                        </div>
                                    ))}
                                </div>
                                <div className="grid grid-cols-7 gap-1">
                                    {calendarDays.map((day, i) => (
                                        <button
                                            key={i}
                                            type="button"
                                            disabled={day.disabled}
                                            onClick={() => !day.disabled && selectDate(day.date)}
                                            className={getDayClasses(day)}
                                        >
                                            {day.date.getDate()}
                                        </button>
                                    ))}
                                </div>
                            </>
                        )}
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between border-t border-(--warm-white)/5 p-4">
                        <button
                            type="button"
                            onClick={clearDate}
                            className="px-4 py-2 text-sm font-medium text-white/40 transition-colors hover:text-white cursor-pointer"
                        >
                            Clear
                        </button>
                        <button
                            type="button"
                            onClick={closeDropdown}
                            className="rounded-lg border border-(--warm-white)/10 px-5 py-2 text-sm font-medium text-white/60 transition-colors hover:bg-(--warm-white)/5 hover:text-white cursor-pointer"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
