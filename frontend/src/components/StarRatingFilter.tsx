type Props = {
  selectedStars: string[];
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const StarRatingFilter = ({ selectedStars, onChange }: Props) => {
  return (
    <div className="border-b border-slate-300 lg:pb-5 pb-2">
      <h4 className="text-md font-bold lg:mb-2">Star Rating:</h4>
      <div className="max-lg:flex max-lg:w-full max-lg:overflow-x-auto">
        {["5", "4", "3", "2", "1"].map((star) => (
          <label className="flex items-center space-x-2 pl-1 min-w-fit">
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
    </div>
  );
};
export default StarRatingFilter;
