import { useState } from 'react';
import { Menu } from '@headlessui/react';
import { NameComboBox } from './NameComboBox';

export const Form = () => {
  const [inputValues, setInputValues] = useState({
    name: '',
    age: 0,
    gender: '',
    medicalHistory: '',
    currentMedication: '',
    symptoms: {
      fever: false,
      stomachPain: false,
      bodyAches: false,
      extremityPain: false,
      numbness: false,
      chills: false,
      lightHeadedness: false,
    },
  });

  const handleChange = (evt) => {
    const { value, name } = evt.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const handleCheckboxChange = (evt) => {
    const { checked, name } = evt.target;
    setInputValues({
      ...inputValues,
      symptoms: {
        ...inputValues.symptoms,
        [name]: checked,
      },
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
  };

  console.log(inputValues);
  return (
    <div className="pl-[58px] h-screen">
      <h1 className="text-[50px] font-bold pt-16 pb-[106px]">
        Start By Answering
      </h1>
      <form
        className="flex flex-wrap gap-x-[109px] gap-y-[60px] max-w-[935px]"
        onSubmit={handleSubmit}
      >
        <label className="items-start flex flex-col text-[28px] gap-y-3 font-bold">
          Name
          <input
            className="outline rounded-lg outline-[#CCDFFF] p-2 text-[#00003C] w-[297px] w-full placeholder: text-base font-light"
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
        <label className="flex flex-col items-start text-[28px] gap-y-3 font-bold">
          Medical History
          <input
            className="outline rounded-lg p-2 outline-[#CCDFFF] max-w-[253px] placeholder: text-base font-light"
            type="text"
            name="medicalHistory"
            onChange={handleChange}
            value={inputValues.medicalHistory}
            placeholder="Medical history"
          />
        </label>
        {/* button for adding another input option */}
        <label className="flex flex-col items-start text-[28px] gap-y-3 font-bold">
          Medication List
          <input
            className="outline rounded-lg p-2 outline-[#CCDFFF] placeholder: text-base font-light"
            type="text"
            name="currentMedication"
            onChange={handleChange}
            value={inputValues.currentMedication}
            placeholder="Current medications"
          />
        </label>
        {/* button for adding another input option */}
        <Menu>
          <Menu.Button className="outline">Symptoms</Menu.Button>
          <Menu.Items>
            <Menu.Item>
              {({ active }) => (
                <a
                  className={`${active && 'bg-blue-500'}`}
                  href="/account-settings"
                >
                  Account settings
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  className={`${active && 'bg-blue-500'}`}
                  href="/account-settings"
                >
                  Documentation
                </a>
              )}
            </Menu.Item>
            <Menu.Item disabled>
              <span className="opacity-75">Invite a friend (coming soon!)</span>
            </Menu.Item>
          </Menu.Items>
        </Menu>
        {/* <label>
          <input
            type="checkbox"
            name="fever"
            checked={inputValues.symptoms.fever}
            onChange={handleCheckboxChange}
          />
          Fever
        </label>
        <label>
          <input
            type="checkbox"
            name="stomachPain"
            checked={inputValues.symptoms.stomachPain}
            onChange={handleCheckboxChange}
          />
          Stomach Pain
        </label>
        <label>
          <input
            type="checkbox"
            name="bodyAches"
            checked={inputValues.symptoms.bodyAches}
            onChange={handleCheckboxChange}
          />
          Body Aches
        </label>
        <label>
          <input
            type="checkbox"
            name="extremityPain"
            checked={inputValues.symptoms.extremityPain}
            onChange={handleCheckboxChange}
          />
          Extremity Pain
        </label>
        <label>
          <input
            type="checkbox"
            name="numbness"
            checked={inputValues.symptoms.numbness}
            onChange={handleCheckboxChange}
          />
          Numbness
        </label>
        <label>
          <input
            type="checkbox"
            name="chills"
            checked={inputValues.symptoms.chills}
            onChange={handleCheckboxChange}
          />
          Chills
        </label>
        <label>
          <input
            type="checkbox"
            name="lightHeadedness"
            checked={inputValues.symptoms.lightHeadedness}
            onChange={handleCheckboxChange}
          />
          Light Headedness
        </label> */}
        <button type="submit">Get Diagnosis</button>
      </form>
    </div>
  );
};
