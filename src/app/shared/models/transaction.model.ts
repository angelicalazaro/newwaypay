export type TransactionStatus = 'pending' | 'completed' | 'failed' | 'refunded';
export type PaymentPlan = '3x' | '4x';

export interface Transaction {
  readonly id: string;
  readonly label: string;
  readonly amount: number;
  readonly status: TransactionStatus;
  readonly plan: PaymentPlan;
  readonly date: string;
  readonly installments: readonly number[];
}
