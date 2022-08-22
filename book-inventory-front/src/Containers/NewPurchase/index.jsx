import React, {useState} from 'react';
import {
  Main,
  Content,
  Form,
  Image,
  Title,
  Author,
  Info,
  Publisher,
  Input,
  Label,
  LabelValidation
} from './style';
import {useLocation} from 'react-router-dom';
import {useMutation, useQueryClient} from 'react-query';
import purchasesApi from '../../Commons/Api/purchasesApi';
import validateNewPurchase from './validateNewPurchase';
import {ButtonSubmit} from '../NewBook/style';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSave} from '@fortawesome/free-solid-svg-icons';

const NewPurchase = () => {

  const { state: book = {} } = useLocation();

  const purchaseProps = {bookId: book.id, amount: 0, uniteValue: 0};

  const [newPurchase, setNewPurchase] = useState({ ...purchaseProps });
  const queryClient = useQueryClient();

  const onSucess = () => queryClient.invalidateQueries("purchases");
  const methods = {
    save: useMutation(purchasesApi.save, { onSuccess: onSucess }),
  };
  const api = {
    save: (data) => methods.save.mutate(data),
  };

  const validations = {amount: "", uniteValue: ""}


  const [labelValidations, setLabelValidations] = useState(validations)


  const validate = (props) => {
    let result = {...validations}
    result.amount = validateNewPurchase.isValidAmount(props.amount) ? "" : "O valor não pode ter notação científica"
    result.uniteValue = validateNewPurchase.isValidUniteValue(props.uniteValue) ? "" : "O valor não pode ter notação científica"
    const hasError = !([result.amount, result.uniteValue].every(e => e === ""))
    return [result, hasError]
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const [validationResult, hasError] = validate(newPurchase)
    setLabelValidations(validationResult)

    const formatted = {
      amount: Number (newPurchase.amount) ,
      uniteValue: Number(newPurchase.uniteValue),
    }
    if (!hasError){
      api.save({ ...newPurchase, ...formatted });
      setNewPurchase({ ...purchaseProps })
    };
  };


  let content = (
    <Form onSubmit={handleSubmit}>
      <h2>Cadastro de Compra</h2>
      <div>
        <Image src={book.image} />
        <Info>
          <Title>{book.title}</Title>
          <Author>{book.author}</Author>
          <div>
            <div>{book.publisherDate}</div>
            <Publisher>{book.publisher}</Publisher>
          </div>
          <div>
            <div>
              <Label>Quantidade</Label>
              <Input
                type="number"
                id="amount"
                min="1"
                value={newPurchase.amount}
                onChange={(e) =>
                  setNewPurchase({ ...newPurchase, amount: e.target.value })
                }
                required
              />
              <LabelValidation>{labelValidations.amount}</LabelValidation>
            </div>
            <div>
              <Label>Preço</Label>
              <Input
                type="number"
                id="preço"
                min="0.01"
                step="0.01"
                value={newPurchase.uniteValue}
                onChange={(e) =>
                  setNewPurchase({ ...newPurchase, uniteValue: e.target.value })
                }
                required
              />
              <LabelValidation>{labelValidations.uniteValue}</LabelValidation>
            </div>
            <ButtonSubmit>Salvar
              <FontAwesomeIcon icon={faSave} />
            </ButtonSubmit>
          </div>
        </Info>
      </div>
    </Form>
  );

  return (
    <Main>
      <Content>
        {content}
      </Content>
    </Main>
  );
};

export default NewPurchase;
