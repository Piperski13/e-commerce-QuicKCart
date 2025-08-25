import { useState } from "react";

const Voucher = (props) => {
  const [voucher, setVoucher] = useState("");

  const dummyVouchers = ["SHOPMAX", "REACTESHOP", "ESHOP10"];

  const handleSubmit = (e) => {
    e.preventDefault();

    const confirmedVoucher = dummyVouchers.some((dummyVoucher) => {
      return dummyVoucher === voucher;
    });

    props.discount(confirmedVoucher);

    setVoucher("");
  };

  return (
    <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
      <form method="post" onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
            {" "}
            Do you have a voucher or gift card?{" "}
          </label>
          <label className="text-xs dark:text-[#22c55e] ">
            Try out these vouchers:{" "}
            <span className="font-medium underline decoration-pink-500/50">
              'SHOPMAX'
            </span>
            ,{" "}
            <span className="font-medium underline decoration-pink-500/50">
              'REACTESHOP'
            </span>
            ,{" "}
            <span className="font-medium underline decoration-pink-500/50">
              'ESHOP10'
            </span>
          </label>
          <input
            type="text"
            id="voucher"
            onChange={(e) => setVoucher(e.target.value)}
            value={voucher}
            className="mt-2 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
            placeholder=""
            required
          />
        </div>
        <button
          type="submit"
          className="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        >
          Apply Code
        </button>
      </form>
    </div>
  );
};

export default Voucher;
