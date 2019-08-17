import Address from './Address';

interface BillingAddress {
  address?: Address;
  email?: string;
  name?: string;
  phone?: string;
}

export default BillingAddress;
