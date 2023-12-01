import { PartialItem } from '@/utils/supabase/types';

type ItemDetailPropType = PartialItem & {
  fontSize: string;
};

const ItemDetails: React.FC<ItemDetailPropType> = ({
  condition,
  item_type,
  postcode,
  postable,
  fontSize,
}) => {
  return (
    <div
      className={`flex flex-col justify-center items-center gap-1 ${fontSize}`}
    >
      <p className=''>
        <span className='text-primaryOrange font-light mr-2'>Condition:</span>
        {condition}
      </p>
      <p className=''>
        <span className='text-primaryOrange font-light mr-2'>Category:</span>
        {item_type}
      </p>
      <p className=''>
        <span className='text-primaryOrange font-light mr-2'>Location:</span>
        {postcode}
      </p>
      {postable && <p className='text-center italic mt-5'>Postage covered</p>}
    </div>
  );
};

export default ItemDetails;
