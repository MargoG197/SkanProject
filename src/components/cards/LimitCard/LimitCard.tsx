const LimitCard = () => {
  return (
    <div
      style={{
        width: "175px",
        height: "63px",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        display: "flex",
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '0 8px',
        alignItems:'flex-end',
        backgroundColor: "#D9D9D9",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <p
            style={{
              fontSize: "12px",
              color: "#666",
              margin: "0"
            }}
          >
            Использовано компаний <b style={{
              fontSize: "14px", color:'black'}}>34</b>
          </p>
          <p
            style={{
              fontSize: "12px",
              color: "#666",
              margin: "0",
            }}
          >
            Лимит по компаниям <b style={{
              fontSize: "14px", fontWeight:'700',
              color: "#8AC540",}}>340</b>
          </p>
        </div>
      </div>
    
    </div>
  );
};

export default LimitCard;
