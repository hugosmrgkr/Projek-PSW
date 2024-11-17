import React, { useState } from 'react';

const MateriDasar = () => {
  const [selectedMateri, setSelectedMateri] = useState(null);

  const handleMateriClick = (index) => {
    selectedMateri(selectedMateri === index ? null : index );
  };
  return (
    <div>
      <h2>Materi</h2>
      <p>Berisi Materi-materi kelas 10.</p>
      
    </div>
  );
};

export default MateriDasar;
