export default function ErrorPage(props) {
  const { fetchedData } = props;

  return (
    <div className="h-[100vh] flex flex-col justify-center items-center text-center px-4">
      <img
        src="https://cdn-icons-png.flaticon.com/512/463/463612.png"
        alt="error"
        className="w-20 h-20 mb-4"
      />
      <h2 className="text-2xl font-semibold text-red-600 mb-2">
        Oops! Something went wrong.
      </h2>
      <p className="text-gray-700 mb-4">
        We couldn’t load the products. Please try again later.
      </p>
      <button
        onClick={fetchedData}
        className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 hover:cursor-pointer font-semibold"
      >
        Retry
      </button>
    </div>
  );
}
