import Text from './text'

export const BillText = ({ text }) => <Text text={text} />

export const BillTextCompare = ({ text, diff = null }) => (
  <div className='bill-text-compare'>
    <style jsx>
      {`
        .bill-text-compare {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-gap: 0 15px;
        }

        .select-stage {
          text-align: center;
          background-color: #fbfbfb;
          margin: 90px 15px 30px 0;
        }

        p {
          padding-top: 100px;
          color: #fe3e68;
        }
      `}
    </style>
    <Text hide='ins' text={text} />
    {diff && <Text hide='del' text={text} />}
    {!diff && (
      <div className='select-stage'>
        <p>Etapa sin seleccionar</p>
      </div>
    )}
  </div>
)
