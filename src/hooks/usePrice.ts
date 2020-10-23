import axios from 'axios';
import { useEffect, useState } from 'react';

export type NoShipping = 'ALLOWED' | 'APPLIED' | 'REQUIRED' | 'FORBIDDEN';

export type CurrencyCode = 'CAD' | 'USD' | 'GBP' | 'AUD' | 'NZD';

export type PriceQueryOptions = {
  noShipping?: boolean;
  discountAll?: boolean;
  discount?: { [d in CurrencyCode]?: number } & { default: number };
  discountSignature?: string;
  MMFreeMW?: boolean;
  deluxeKit?: boolean;
  portfolio?: boolean;
  depositOverrides?: { [code: string]: number };
  installmentsOverride?: number;
  studentDiscount?: boolean;
}

export interface PriceQuery {
  courses: string[];
  countryCode: string;
  provinceCode?: string;
  options?: PriceQueryOptions;
}

interface Plan {
  /** the discount based on the payment plan */
  discount: number;
  /** the amount to be paid today */
  deposit: number;
  /** the size of the installments  */
  installmentSize: number;
  /** the number of installments */
  installments: number;
  /** any amount left over due to rounding */
  remainder: number;
  /** the final price after discounts */
  total: number;
  /** the original deposit, before overrides */
  originalDeposit: number;
  /** the original number of installments, before overrides */
  originalInstallments: number;
}

interface Price {
  /** the base price before any discounts */
  cost: number;
  /** the discount on courses after the first course */
  multiCourseDiscount: number;
  /** additional promotional discount */
  promoDiscount: number;
  /** the discount for not shipping materials */
  shippingDiscount: number;
  /** the discounted price (before payment plan discount) */
  discountedCost: number;
  /** the payment plans */
  plans: { full: Plan; part: Plan };
  /** what our cost for shipping would be if we shipped */
  shipping: number;
}

export type PriceResult = {
  countryCode: string;
  provinceCode?: string;
  currency: Currency;
  disclaimers: string[];
  notes: string[];
  noShipping: NoShipping;
  noShippingMessage?: string;
  courses: CourseResult[];
} & Price;

export type CourseResult = {
  code: string;
  name: string;
  primary: boolean;
  free: boolean;
} & Price;

export interface Currency {
  code: string;
  symbol: string;
  name: string;
  exchangeRate: number;
}

const getParams = (country: string, courses: string[]) => ({
  countryCode: country,
  courses,
});

export const usePrice = (country: string, courses: string[]): PriceResult | null => {
  const [ price, setPrice ] = useState<PriceResult | null>(null);

  useEffect(() => {
    const url = 'https://api.qccareerschool.com/prices';
    const cancelTokenSource = axios.CancelToken.source();
    const fetchData = async () => {
      try {
        const response = await axios.get<PriceResult>(url, {
          params: getParams(country, courses),
          cancelToken: cancelTokenSource.token,
          headers: { 'X-API-Version': 2 },
        });
        setPrice(response.data);
      } catch (err) {
        setPrice(null);
      }
    };
    fetchData();
    return () => cancelTokenSource.cancel();
  }, [ country, courses ]);

  return price;
};
