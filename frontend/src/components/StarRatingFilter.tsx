type Props = {
  selectedStars: string[];
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const StarRatingFilter = ({ selectedStars, onChange }: Props) => {
  return (
    <div className="border-b border-slate-300 pb-5 max-lg:flex max-lg:flex-wrap">
      <h4 className="text-md font-bold mb-2">Property Rating</h4>
      {["5", "4", "3", "2", "1"].map((star) => (
        <label className="flex items-center space-x-2 border-l-2 border-slate-200 pl-1">
          <input
            type="checkbox"
            className="rounded"
            value={star}
            checked={selectedStars.includes(star)}
            onChange={onChange}
          />
          <span className="pr-3">{star} Stars</span>
        </label>
      ))}
    </div>
  );
};
export default StarRatingFilter;
