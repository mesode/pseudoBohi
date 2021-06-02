import { number } from "joi"

interface Account {
    id: number;
    accName: string;
    accBalance: number;
}

const Accounts: Account[] = [
    {
        id: 1,
        accName: 'CASH AT HAND',
        accBalance: 0
    },
    {
        id: 2,
        accName: 'LOANS',
        accBalance: 0
    },
    {
        id: 3,
        accName: 'BANK SAVINGS',
        accBalance: 0
    },
    {
        id: 4,
        accName: 'CREDITS',
        accBalance: 0
    },
    {
        id: 5,
        accName: 'INVESTED STOCKS',
        accBalance: 0
    },
    {
        id: 6,
        accName: 'MICROFINANCE',
        accBalance: 0
    },
]
export { Account, Accounts };
