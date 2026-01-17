function StatsCardItem({ children, title, record }) {
  return (
    <div className="flex flex-col items-center gap-2 px-3 py-5 rounded-md shadow bg-card">
      <span className="text-2xl text-primary">{children}</span>
      <h4 className="text-xl  font-medium">{title}</h4>
      <p className="font-semibold text-3xl ">{record}</p>
    </div>
  );
}

export default StatsCardItem;
