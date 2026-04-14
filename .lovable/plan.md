
## Plan: Fix calculator formula to divide by 30 days

Update the `dailyLoss` calculation in `src/components/LossCalculator.tsx` from `(salesNum * ticketNum) / salesNum` to `(salesNum * ticketNum) / 30`.

This gives the daily revenue loss by dividing the monthly revenue by 30 days.

### Change

**File:** `src/components/LossCalculator.tsx`
- Change: `const dailyLoss = salesNum > 0 ? (salesNum * ticketNum) / salesNum : 0;`
- To: `const dailyLoss = salesNum > 0 ? (salesNum * ticketNum) / 30 : 0;`
