import { Card } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';

import './charts-estimate.css';

export function ChartsEstimate() {
  return (
    <div className="d-flex justify-content-between flex-wrap p-0" style={{ margin: '15px' }}>
      <Card style={{ width: 340, margin: 10, borderRadius: '8px', boxShadow: '3px 1px 5px gray' }}>
        <div className="w-100">
          <div>
            <h4 style={{ fontSize: '18px', fontFamily: 'Poppins' }}>Presentes</h4>
          </div>

          <div
            className="d-flex justify-content-between align-items-center mt-4"
            style={{
              fontFamily: 'Poppins',
            }}
          >
            <span style={{ fontSize: '16px', padding: 0 }}>451 alunos</span>
            <span
              style={{ fontSize: '16px', padding: 0, color: '#4A9231' }}
              className="d-flex align-items-center justify-content-between"
            >
              +0,7
              <ArrowUpOutlined />
            </span>
          </div>
        </div>
      </Card>

      <Card style={{ width: 340, margin: 10, borderRadius: '8px', boxShadow: '3px 1px 5px gray' }}>
        <div className="w-100">
          <div>
            <h4 style={{ fontSize: '18px', fontFamily: 'Poppins' }}>Faltas</h4>
          </div>

          <div
            className="d-flex justify-content-between align-items-center mt-4"
            style={{
              fontFamily: 'Poppins',
            }}
          >
            <span style={{ fontSize: '16px', padding: 0 }}>451 alunos</span>
            <span
              style={{ fontSize: '16px', padding: 0, color: '#FF0000' }}
              className="d-flex align-items-center justify-content-between"
            >
              -0,1
              <ArrowDownOutlined />
            </span>
          </div>
        </div>
      </Card>

      <Card style={{ width: 340, margin: 10, borderRadius: '8px', boxShadow: '3px 1px 5px gray' }}>
        <div className="w-100">
          <div>
            <h4 style={{ fontSize: '18px', fontFamily: 'Poppins' }}>Pendentes</h4>
          </div>

          <div
            className="d-flex justify-content-between align-items-center mt-4"
            style={{
              fontFamily: 'Poppins',
            }}
          >
            <span style={{ fontSize: '16px', padding: 0 }}>451 alunos</span>
            <span
              style={{ fontSize: '16px', padding: 0, color: '#EBAA02' }}
              className="d-flex align-items-center justify-content-between"
            >
              +2,0
              <ArrowUpOutlined />
            </span>
          </div>
        </div>
      </Card>

      <Card style={{ width: 340, margin: 10, borderRadius: '8px', boxShadow: '3px 1px 5px gray' }}>
        <div className="w-100">
          <div>
            <h4 style={{ fontSize: '18px', fontFamily: 'Poppins' }}>Matéria destaque</h4>
          </div>

          <div
            className="d-flex justify-content-between align-items-center mt-4"
            style={{
              fontFamily: 'Poppins',
            }}
          >
            <span style={{ fontSize: '16px', padding: 0 }}>451 alunos</span>
            <span
              style={{ fontSize: '16px', padding: 0, color: '#2734B6' }}
              className="d-flex align-items-center justify-content-between"
            >
              +0,7
              <ArrowUpOutlined />
            </span>
          </div>
        </div>
      </Card>
    </div>
  );
}
