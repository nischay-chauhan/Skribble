const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-4xl font-bold mb-4">404 Not Found</h2>
        <p className="text-gray-700">Oops! The page you are looking for does not exist.</p>
      </div>
    </div>
  );
};

export default NotFound;
