import CardBrand from '../enums/CardBrand';

interface Card {
  address_city?: string;
  address_country?: string;
  address_line1?: string;
  address_line2?: string;
  address_state?: string;
  address_zip?: string;
  brand?: CardBrand;
  country?: string;
  exp_month?: number;
  exp_year?: number;
  last4?: string;
}

export default Card;
