import axios from 'axios';
import React, { useEffect, useReducer } from 'react';

import { useSchool } from '../hooks/useSchool';

import { Container } from '../styled/Container';
import { FormGroup } from '../styled/FormGroup';
import { Heading1 } from '../styled/Heading1';
import { Input } from '../styled/Input';
import { Label } from '../styled/Label';
import { OutlineButton } from '../styled/OutlineButton';
import { Section } from '../styled/Section';

type Props = {
  country: string;
  courses: string[];
}

type State = {
  emailAddress: string;
  submitting: boolean;
  success: boolean;
  error: boolean;
};

type Action =
  | { type: 'SET_EMAIL'; payload: string }
  | { type: 'SUBMIT' }
  | { type: 'SUCCESS' }
  | { type: 'ERROR' };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'SET_EMAIL':
      return { ...state, emailAddress: action.payload, submitting: false, success: false, error: false };
    case 'SUBMIT':
      return { ...state, submitting: true, success: false, error: false };
    case 'SUCCESS':
      return { ...state, submitting: false, success: false, error: false };
    case 'ERROR':
      return { ...state, submitting: false, success: false, error: true };
    default:
      return state;
  }
};

const initialState = {
  emailAddress: '',
  submitting: false,
  success: false,
  error: false,
};

export const EmailSection: React.FC<Props> = ({ country, courses }) => {
  const [ state, dispatch ] = useReducer(reducer, initialState);
  const school = useSchool();

  const submit = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!state.submitting) {
      dispatch({ type: 'SUBMIT' });
    }
  };

  useEffect(() => {
    if (!state.submitting) {
      return;
    }
    if (!state.emailAddress) {
      return;
    }
    const cancelTokenSource = axios.CancelToken.source();
    const url = 'https://api.qccareerschool.com/tuitionEmail';
    const process = async () => {
      try {
        await axios.post(url, { data: { email: state.emailAddress, countryCode: country, courses, school } });
      } catch (err) {
        dispatch({ type: 'ERROR' });
      } finally {
        dispatch({ type: 'SUCCESS' });
      }
    };
    process();
    return () => cancelTokenSource.cancel();
  }, [ country, courses, school, state.emailAddress, state.submitting ]);

  return (
    <Section>
      <Container>
        <Heading1>Email Your Results</Heading1>
        <FormGroup>
          <Label htmlFor="email-address">Email Address</Label>
          <Input
            id="email-address"
            type="email"
            placeholder="user@example.com"
            value={state.emailAddress}
            onChange={e => dispatch({ type: 'SET_EMAIL', payload: e.target.value })}
            disabled={state.submitting}
          />
        </FormGroup>
        <OutlineButton disabled={state.submitting || !state.emailAddress} inverse={true} onClick={submit}>Send</OutlineButton>
        {state.submitting && <p>Sending...</p>}
        {state.error && <p>There was an error with your request</p>}
      </Container>
    </Section>
  );
};
