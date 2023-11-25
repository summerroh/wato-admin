import { useState } from 'react';
import add from '../images/add.svg';

export const Form = () => {
  const [inputValues, setInputValues] = useState({
    name: '',
    age: 0,
    gender: '',
    medicalHistory: '',
    currentMedication: '',
    symptom: '',
  });
  const [medicalHistories, setMedicalHistories] = useState([]);
  const [currentMedications, setCurrentMedications] = useState([]);
  const [symptoms, setSymptoms] = useState([]);

  const handleChange = (evt) => {
    const { value, name } = evt.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
  };

  console.log(medicalHistories);

  console.log(inputValues);
  return (
    <div className="pl-[58px] h-screen">
      <h1 className="text-[50px] font-bold pt-16 pb-[106px]">
        Start By Answering
      </h1>
      <form
        className="flex flex-wrap gap-x-[109px] gap-y-[100px] max-w-[1000px]"
        onSubmit={handleSubmit}
      >
        <label className="items-start flex flex-col text-[28px] gap-y-3 font-bold">
          Name
          <input
            className="outline rounded-lg outline-[#CCDFFF] p-2 text-[#00003C] w-[253px] placeholder: text-base font-light"
            type="text"
            name="name"
            value={inputValues.name}
            placeholder="Name"
            onChange={handleChange}
          />
        </label>
        <label className="flex flex-col items-start text-[28px] gap-y-3 font-bold">
          Age
          <input
            className="outline rounded-lg p-2 outline-[#CCDFFF] max-w-[149px] placeholder: text-base font-light"
            type="number"
            name="age"
            onChange={handleChange}
            value={inputValues.age}
            placeholder="Age"
          />
        </label>
        <label className="flex flex-col items-start text-[28px] gap-y-3 font-bold">
          Gender
          <input
            className="outline rounded-lg p-2 outline-[#CCDFFF] max-w-[149px] placeholder: text-base font-light"
            type="text"
            name="gender"
            onChange={handleChange}
            value={inputValues.gender}
            placeholder="Gender"
          />
        </label>
        <label className="flex flex-col items-start text-[28px] gap-y-3 font-bold relative">
          Medical History
          <input
            className="outline rounded-lg p-2 outline-[#CCDFFF] w-[253px] placeholder: text-base font-light"
            type="text"
            name="medicalHistory"
            placeholder="Medical history"
            value={inputValues.medicalHistory}
            onChange={handleChange}
          />
          <button
            onClick={() => {
              setMedicalHistories([
                ...medicalHistories,
                inputValues.medicalHistory,
              ]);
              setInputValues({ ...inputValues, medicalHistory: '' });
            }}
            style={{ backgroundImage: `url(${add})` }}
            className="bg-plus absolute left-[260px] top-14 rounded-full text-blueplus p-3 text-4xl w-[40px] h-[40px] bg-no-repeat bg-center"
          ></button>
          {medicalHistories && (
            <div className="absolute m-w-[250px] top-[110px] flex flex-wrap gap-x-2 gap-y-2">
              {medicalHistories &&
                medicalHistories.map((item, index) => (
                  <span
                    className="text-plusplus bg-plus text-base font-normal px-4 py-3 rounded-[40px]"
                    key={index}
                  >
                    {item}
                  </span>
                ))}
            </div>
          )}
        </label>
        <label className="flex relative flex-col items-start text-[28px] gap-y-3 font-bold">
          Medication List
          <input
            className="w-[253px] outline rounded-lg p-2 outline-[#CCDFFF] placeholder: text-base font-light"
            type="text"
            name="currentMedication"
            onChange={handleChange}
            value={inputValues.currentMedication}
            placeholder="Current medications"
          />
          <button
            onClick={() => {
              setCurrentMedications([
                ...currentMedications,
                inputValues.currentMedication,
              ]);
              setInputValues({ ...inputValues, currentMedication: '' });
            }}
            style={{ backgroundImage: `url(${add})` }}
            className="bg-plus absolute left-[260px] top-14 rounded-full text-blueplus p-3 text-4xl w-[40px] h-[40px] bg-no-repeat bg-center "
          ></button>
          {currentMedications && (
            <>
              <div className="absolute m-w-[250px] top-[110px] flex flex-wrap gap-x-2 gap-y-2">
                {currentMedications &&
                  currentMedications.map((item, index) => (
                    <span
                      className="text-plusplus bg-plus text-base font-normal px-4 py-3 rounded-[40px]"
                      key={index}
                    >
                      {item}
                    </span>
                  ))}
              </div>
              <span></span>
            </>
          )}
        </label>
        <label className="flex relative flex-col items-start text-[28px] gap-y-3 font-bold">
          Symptoms
          <input
            className="w-[253px] outline rounded-lg p-2 outline-[#CCDFFF] placeholder: text-base font-light"
            type="text"
            name="symptom"
            onChange={handleChange}
            value={inputValues.symptom}
            placeholder="Symptoms"
          />
          <button
            onClick={() => {
              setSymptoms([...symptoms, inputValues.symptom]);
              setInputValues({ ...inputValues, symptom: '' });
            }}
            style={{ backgroundImage: `url(${add})` }}
            className="bg-plus absolute left-[260px] top-14 rounded-full text-blueplus p-3 text-4xl w-[40px] h-[40px] bg-no-repeat bg-center "
          ></button>
          {symptoms && (
            <div className="absolute m-w-[250px] top-[110px] flex flex-wrap gap-x-2 gap-y-2">
              {symptoms &&
                symptoms.map((item, index) => (
                  <span
                    className="text-plusplus bg-plus text-base font-normal px-4 py-3 rounded-[40px]"
                    key={index}
                  >
                    {item}
                  </span>
                ))}
            </div>
          )}
        </label>
        <button
          className="rounded-[40px] outline text-xl bg-button text-white py-5 px-[30px] self-center mt-24 mx-auto"
          type="submit"
        >
          Get Diagnosis
        </button>
      </form>
    </div>
  );
};
