export interface DonationForm {
    recipientName: string;
    address: string;
    income: number;
    dateOfBirth: Date;
    donationAmount: number;
    isMonthly: boolean;
    hasAgreed: boolean;
}

