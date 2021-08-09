import { Button, TextField } from "@material-ui/core";
import { Add, DragHandle } from "@material-ui/icons";
import { useEffect, useState } from "react";
import styles from "../../styles/Content/aljabar.module.scss";
const Aljabar = () => {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(10);
  const [angka1, setAngka1] = useState(0);
  const [angka2, setAngka2] = useState(0);
  const [hasil, setHasil] = useState("");
  const hasilPertambahan = () => {
    const hasilAkhir = angka1 + angka2;
    return <p>{hasilAkhir}</p>;
  };
  return (
    <div className={styles.containeraljabar}>
      <h1>Pertabahan,Pengurangan,Pembagian dan Perkalian di Next.js</h1>

      <h4>Pertabahan di Javascript</h4>
      <p>{number1}</p>
      <p>{number2}</p>
      <div className={styles.buttoncounter}>
        <Button variant="contained" color="primary" onClick={() => setNumber1(number1 + 1)}>
          Tambah 1 Counter
        </Button>
        <Button variant="contained" color="secondary" onClick={() => setNumber2(number2 - 1)}>
          Kurang 1 Counter
        </Button>
      </div>
      <div className={styles.pertambahan}>
        <TextField
          variant="outlined"
          type="number"
          value={angka1}
          onChange={(e) => setAngka1(parseInt(e.target.value))}
          label="angka pertama"
        />
        <Add />
        <TextField
          label="angka kedua"
          variant="outlined"
          type="number"
          value={angka2}
          onChange={(e) => setAngka2(parseInt(e.target.value))}
        />
        <DragHandle />
        <p>{hasilPertambahan()}</p>
      </div>
    </div>
  );
};

export default Aljabar;
