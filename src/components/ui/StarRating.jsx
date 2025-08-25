const StarRating = ({ rating }) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => {
        let fill = "#E5E7EB"; // empty gray

        if (i < Math.floor(rating)) {
          fill = "#FFD700"; // full star
        } else if (i < rating) {
          fill = "url(#half)";
        }

        return (
          <svg
            key={i}
            viewBox="0 0 24 24"
            fill={fill}
            stroke="#FFD700"
            strokeWidth="0.5"
            className="w-4 h-4"
          >
            {fill === "url(#half)" && (
              <defs>
                <linearGradient id="half">
                  <stop offset="50%" stopColor="#FFD700" />
                  <stop offset="50%" stopColor="#E5E7EB" />
                </linearGradient>
              </defs>
            )}
            <polygon
              points="12 2 15.09 8.26 22 9.27 
                      17 14.14 18.18 21.02 12 17.77 
                      5.82 21.02 7 14.14 2 9.27 
                      8.91 8.26 12 2"
            />
          </svg>
        );
      })}
    </div>
  );
};

export default StarRating;
