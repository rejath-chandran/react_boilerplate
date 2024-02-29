function MailAvtar({ image, name, fname, lname }) {
  console.log(image);
  return (
    <div>
      <div className="avatar">
        <div className="w-24 rounded">
          <img src={image} />
        </div>
      </div>
      <div className="w-full h-full">
        <div className="join join-vertical lg:join-horizontal">
          <span>{fname}</span>
          <span>{lname}</span>
        </div>
      </div>
    </div>
  );
}

export default MailAvtar;
