import * as React from 'react';
import { Section, SectionBlock, SectionTitle, Input } from 'figma-react-ui-kit';
import PropertyValues from './PropertyValues';
import { SortDirections } from '../../common/types';
import RadioButton from './RadioButton';
import { throttle } from '../../common/utils';

export type TPropertyProps = {
  title: string;
  values: string[];
  direction: SortDirections | undefined;
  gap: number | undefined;
  onChange: (
    propertyKey: string,
    {values, direction, gap}: {values?: string[], direction?: SortDirections, gap?: number}
  ) => void;
}

export default function Property(props: TPropertyProps) {
  const {title, values, onChange, direction, gap} = props;
  const [inputGap, setInputGap] = React.useState(gap);

  React.useEffect(() => {
    setInputGap(gap);
  }, [gap]);

  const onChangeGap = React.useRef(throttle((gap: number) => {
    onChange(title, {gap});
  }, 1000));
  const onChangeInputGap = (changedGap: React.ChangeEvent<HTMLInputElement>) => {
    const numberGap = Number(changedGap.target.value);

    onChangeGap.current(numberGap);
    setInputGap(numberGap);
  };
  const onChangeDirection = (selectedDirection: SortDirections) => {
    onChange(title, {direction: selectedDirection});
  };
  const onChangeValues = (sortedValues: string[]) => {
    onChange(title, {values: sortedValues});
  };

  return (
    <Section>
      <div className='section-container-title'>
        <SectionTitle>
          {title}
        </SectionTitle>
        <div className='radio-button-container'>
          <RadioButton
            onChange={onChangeDirection}
            id={`${title}-columns`}
            isSelected={direction === SortDirections.COLUMNS}
            label={"columns"}
            value={SortDirections.COLUMNS}
          />
          <RadioButton
            onChange={onChangeDirection}
            id={`${title}-rows`}
            isSelected={direction === SortDirections.ROWS}
            label={"row"}
            value={SortDirections.ROWS}
          />
        </div>
        <div className='input-container'>
          <SectionTitle>
            {'Gap: '}
          </SectionTitle>
          <Input value={inputGap || 0} onChange={onChangeInputGap} />
        </div>
      </div>
      <SectionBlock>
        <PropertyValues values={values} onChange={onChangeValues} />
      </SectionBlock>
    </Section>
  );
};
