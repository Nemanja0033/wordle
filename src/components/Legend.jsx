const Legend = () => {
    const legendItems = [
      { label: 'Right spot', color: '#4caf50' },
      { label: 'Wrong spot', color: '#ff9800' },  
      { label: 'Not exist', color: '#3a3f47' }       
    ];
  
    return (
      <div style={{
        width: '100%',
        height: '60px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '20px',
        marginTop: '10px',
        backgroundColor: '#3a3f47   ',
        margin: '0',
      }}>
        {legendItems.map((item, index) => (
          <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{
              width: '25px',
              height: '25px',
              backgroundColor: item.color,
              borderRadius: '4px',
              border: '1px solid #ccc'
            }} />
            <span style={{ color: '#e0e0e0', fontSize: '14px' }}>{item.label}</span>
          </div>
        ))}
      </div>
    );
  };
  
  export default Legend;
  