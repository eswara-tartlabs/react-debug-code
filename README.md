# AI Debugging Challenge

This is a broken React + Redux + TypeScript + Next.js application with multiple forms for debugging practice.

## Setup

1. Install dependencies: `npm install`
2. Run the development server: `npm run dev`

## Issues to Fix

The application has two forms with numerous bugs:

### Basic Form Issues:
- Unrelated `id` and `name` attributes on inputs
- Incorrect TypeScript types (e.g., `name: number`, `email: boolean`)
- Dispatching irrelevant Redux actions instead of updating form state
- Improper state management mixing local state with Redux
- Wrong selectors displaying irrelevant data
- Failing async actions

### Advanced Form Issues:
- Covers various input types: text, number, checkbox, select, textarea
- Wrong types in form data interface
- Unrelated ids and names across inputs
- Irrelevant dispatches on input changes
- Wrong selectors for display
- Incorrect value handling for different input types

### Redux Store Issues:
- Irrelevant state properties (weather in form state)
- Wrong reducer logic (counter incrementing by 2)
- Incorrect types in slices (counter value as string)
- Failing async thunks
- Unnecessary middleware configurations
- Wrong extra reducers handling

Fix the code to make both forms work properly for user data collection.# react-debug-code
