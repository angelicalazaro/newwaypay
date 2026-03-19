export type InstallmentCount = 3 | 4;

export interface CartItem {
  readonly label: string;
  readonly amount: number;
}

export interface PaymentResult {
  readonly success: boolean;
  readonly transactionId: string;
  readonly installments: readonly number[];
}
