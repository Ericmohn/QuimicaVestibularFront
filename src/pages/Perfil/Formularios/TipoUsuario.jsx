import React from 'react'
import { InputProfessor, OpcaoUser } from './styles'

const UserTypeSelection = ({
  userType,
  handleUserTypeChange,
  discountCode,
  handleDiscountCodeChange,
  validateDiscountCode
}) => (
  <OpcaoUser>
    <label>Tipo de Usuário</label>
    <div>
      <label>
        <input
          type="radio"
          value="professor"
          checked={userType === 'professor'}
          onChange={handleUserTypeChange}
        />
        Professor
      </label>
      {userType === 'professor' && (
        <InputProfessor
          type="text"
          className="form-control"
          value={discountCode}
          onChange={handleDiscountCodeChange}
          onBlur={validateDiscountCode}
        />
      )}
    </div>
    <div>
      <label>
        <input
          type="radio"
          value="aluno"
          checked={userType === 'aluno'}
          onChange={handleUserTypeChange}
        />
        Aluno
      </label>
    </div>
    <div>
      <label>
        <input
          type="radio"
          value="outros"
          checked={userType === 'outros'}
          onChange={handleUserTypeChange}
        />
        Outros
      </label>
    </div>
  </OpcaoUser>
)

export default UserTypeSelection
