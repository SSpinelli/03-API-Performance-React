import * as Dialog from "@radix-ui/react-dialog";
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";
import { CloseButton, Content, Overlay, TransactionType, TransactionTypeButton } from "./styles";

export function NewTransactionModal() {
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Title>Nova Transação</Dialog.Title>
        <CloseButton>
          <X size={24} />
        </CloseButton>

        <form action="">
          <input type="text" placeholder="Descrição" required />
          <input type="number" placeholder="preco" required />
          <input type="text" placeholder="Categoria" required />

          <TransactionType>
            <TransactionTypeButton value="income" type="button" variant="income">
              <ArrowCircleUp size={24} />
              Entrada
            </TransactionTypeButton>
            <TransactionTypeButton value="outcome" type="button" variant="outcome">
              <ArrowCircleDown size={24} />
              Saída
            </TransactionTypeButton>
          </TransactionType>

          <button type="submit">Cadastrar</button>
        </form>

      </Content>
    </Dialog.Portal>
  )
}