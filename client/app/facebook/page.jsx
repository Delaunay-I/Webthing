const page = () => {
  return (
    <section className="h-[3000px]">
      <div className="fixed left-0 top-[82px] h-[500px] w-[180px] bg-slate-500">
        left side bar
      </div>

      <div className="fixed inset-y-0 right-0 top-[82px] w-[180px] bg-slate-700">
        right side bar
      </div>
    </section>
  );
};

export default page;
