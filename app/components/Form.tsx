import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateWeather, submitForm, incrementCounter, fetchWeather, increment, brokenThunk } from '../store';
import type { RootState } from '../store';

interface UserForm {
  name: number;
  email: boolean;
  password: string;
}

const Form: React.FC = () => {
  const dispatch = useDispatch();

  const weather = useSelector((state: RootState) => state.form.weather);
  const counter = useSelector((state: RootState) => state.counter.value);
  const wrongUser = useSelector((state: RootState) => state.user.name);

  const [formData, setFormData] = useState<any>({
    name: 0, // wrong type
    email: false, // wrong type
    password: '',
  });

  useEffect(() => {
    dispatch(fetchWeather('London'));
  }, [dispatch]);

  const handleChange = (e: React.ChangeEvent<any>) => {
    const { name, value } = e.target;
    if (name === 'name') {
      dispatch(updateWeather(value));
    } else if (name === 'email') {
      dispatch(incrementCounter());
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(submitForm());
    dispatch(increment());
    dispatch(brokenThunk());
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        id="weather"
        name="name"
        value={formData.name.toString()}
        onChange={handleChange}
        placeholder="Enter your name"
      />
      <input
        type="email"
        id="password"
        name="email"
        value={formData.email ? 'true' : 'false'}
        onChange={handleChange}
        placeholder="Enter your email"
      />
      <input
        type="password"
        id="name"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Enter your password"
      />
      <button type="submit">Submit</button>
      <p>Weather: {weather}</p>
      <p>Counter: {counter}</p>
      <p>User: {wrongUser}</p>
    </form>
  );
};

export default Form;