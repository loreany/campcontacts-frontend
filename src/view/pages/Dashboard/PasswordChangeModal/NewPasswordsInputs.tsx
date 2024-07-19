import React, { useState } from 'react';
import { Input } from '../../../components/Input';

interface NewPasswordInputsProps {
  onPasswordChange: (password: string, confirmPassword: string) => void;
}

const NewPasswordInputs: React.FC<NewPasswordInputsProps> = ({
  onPasswordChange,
}) => {
  const [newPassword, setNewPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = event.target.value;
    setNewPassword(newPassword);
    onPasswordChange(newPassword, confirmPassword);
  };

  const handleConfirmPasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newConfirmPassword = event.target.value;
    setConfirmPassword(newConfirmPassword);
    onPasswordChange(newPassword, newConfirmPassword);
  };

  return (
    <div>
      <Input
        type='password'
        placeholder='Nova Senha'
        name='nova'
        value={newPassword}
        onChange={handlePasswordChange}
      />
      {/* <div>
        <label htmlFor='password'>New Password</label>
        <input
          type='password'
          id='password'
          value={password}
          onChange={handlePasswordChange}
        />
      </div> */}
      <Input
        type='password'
        placeholder='Confirme a Nova Senha'
        name='confirm'
        value={confirmPassword}
        onChange={handleConfirmPasswordChange}
      />
      {/* <div>
        <label htmlFor='confirmPassword'>Confirm Password</label>
        <input
          type='password'
          id='confirmPassword'
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
        />
      </div> */}
    </div>
  );
};

export default NewPasswordInputs;
