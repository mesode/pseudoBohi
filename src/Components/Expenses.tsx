import { number } from "joi"

interface Expense {
    id: number;
    date: string;
    category: string;
    itemName: string;
    accName: string;
    amount: number;
}

const Expenses: Expense[] = [
    {
        id: 1,
        date: '05/04/21',
        category: 'Food Items',
        itemName: 'rice',
        accName: 'CASH AT HAND',
        amount: 2000
    },
    {
        id: 2,
        date: '05/04/21',
        category: 'Debt Payment',
        itemName: 'Money owed Landlord',
        accName: 'BANK SAVINGS',
        amount: 20000
    },
]
export { Expense, Expenses };