import React, { useState, useContext } from 'react';
import './Instruction.css';
import LanguageContext from '../../providers/LanguageContext';

const Instruction = () => {
  const { isEnglish } = useContext(LanguageContext);

  const initialData = [
    ['k', 'R', 'L', 'l<sub>k</sub> = L<sub>k</sub>/2', 'tg a', 'sin a', 'λ', 'ẟ<sub>λ</sub>', 'ε', 'ẟ<sub>ε</sub>'], // Заголовки стовпців
    ['1', '', '', '', '', '', '', '', '', ''], // Значення першого стовпця
    ['2', '', '', '', '', '', '', '', '', ''],
    ['3', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', 'λ- = ', 'ẟλ- =', 'ε- = ', 'ẟε- = '],
  ];

  const [tableData, setTableData] = useState(initialData);

  const handleChange = (e, rowIndex, colIndex) => {
    const newData = [...tableData];
    newData[rowIndex][colIndex] = e.target.value;
    setTableData(newData);
  };

  return (
    <div className="instruction-content">
      <h2>{isEnglish ? 'Instructions' : 'Інструкція виконання практичного завдання'}</h2>
      <p>
        {isEnglish
          ? 'Here are the instructions for performing the task. Follow each step carefully.'
          : 'Ось інструкція для виконання завдання. Дотримуйтесь кожного кроку уважно.'}
      </p>
      <ol>
        <li>{isEnglish ? 'Step 1: Click the “Power” button.' : 'Крок 1: Натисніть кнопку "Живлення".'}</li>
        <li>{isEnglish ? 'Step 2: Click the “Start” button.' : 'Крок 2: Натисніть кнопку "Старт".'}</li>
        <li>{isEnglish ? 'Step 3: Set the distance of the diffraction grating from the screen. There are two ways to do this: you can either enter the distance in the input field or move the diffraction grating to the desired distance.' : 'Крок 3: Встановіть відстань дифракційної ришітки від екрану. Ви можете зробити це двома способами, ввести значення у полі вводу, або потягнути ришітку на потрібну відстань.'}</li>
        <p>{isEnglish ? 'On the ruler, you can observe red disks symmetrically located relative to the central (zero) maximum in the horizontal direction.' : 'На лінійці ви можете спостерігати червоні диски, симетрично розташовані відносно центрального (нульового) максимуму в горизонтальному напрямі.'}</p>
        <li>{isEnglish ? 'Step 4. Measure the distance between the diffraction grating and the screen.' : 'Крок 4. Виміряти віддаль між дифракційною ришіткою і екраном.'}</li>
        <li>{isEnglish ? 'Step 5: Measure the distance L between the centers of the first-order maxima and enter it in the table.' : 'Крок 5: Виміряти віддаль L між центрами максимумів першого порядку та занести в таблицю.'}</li>
        <li>{isEnglish ? 'Step 6: Perform similar measurements for the other maxima and enter it in the table.' : 'Крок 6: Аналогічні виміри провести для інших максимумів та занести в таблицю.'}</li>
        <li>{isEnglish 
          ? (<>
          Step 7: Calculate the wavelength of light λ incident on the diffraction grating using the formula λ = d sin a/K and write the result in the column. 
          λ = <input type="text" className="inline-input" /> nanometers.</>) 
          : (<> Крок 7. Розрахувати довжину хвилі світла λ, яке падає на дифракційну ришітку за формулою λ = d sin a/K та вписати результат у колонку. 
          λ = <input type="text" className="inline-input"/> нанометрів.</> )}</li>
      </ol>

      <table className="data-table">
        <thead>
          <tr>
            {tableData[0].map((header, index) => (
              <th key={index}>
                <span dangerouslySetInnerHTML={{ __html: header }} />
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.slice(1).map((row, rowIndex) => (
            <tr key={rowIndex + 1}>
              {row.map((value, colIndex) => (
                <td key={colIndex}>
                  {/* Якщо це перший стовпець, показуємо лише текст */}
                  {colIndex === 0 ? (
                    <span>{value}</span>
                  ) : (
                    <input
                      type="text"
                      value={value}
                      onChange={(e) => handleChange(e, rowIndex + 1, colIndex)}
                    />
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Instruction;
