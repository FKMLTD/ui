// Copyright 2017-2019 @polkadot/react-hooks authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { useEffect, useState } from 'react';
import keyring from '@polkadot/ui-keyring';

export default function usePassword (): [[string, React.Dispatch<string>], [boolean, React.Dispatch<boolean>]] {
  const [password, setPassword] = useState('');
  const [isPasswordValid, setIsPasswordValid] = useState(false);

  useEffect((): void => {
    setIsPasswordValid(keyring.isPassValid(password));
  }, [password]);

  return [[password, setPassword], [isPasswordValid, setIsPasswordValid]];
}
