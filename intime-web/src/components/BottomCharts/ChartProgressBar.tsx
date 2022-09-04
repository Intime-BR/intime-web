import { Progress } from 'antd';
import './ChartProgress.css';
import {SearchOutlined} from '@ant-design/icons';
 
export function ProgressBarElementor (){
    return(
        <div className='col-md-6'>
        <div className="information">
            <div>
                <h4>Indice de reprovação</h4>
            </div>
            <div className="search">
                <input type="string"></input>
                <SearchOutlined color="#eb2f96"/>
            </div>
        </div>
        <div className="ChartProgress">
            <div>
                <div className="divProgress">
                    <label className="label">1A1</label>
                    <Progress percent={40} strokeColor="#ebaa02" trailColor="rgba(253, 253, 255, 0.18);"/>
                </div>
                <div>
                    <label className="label">2A1</label>
                    <Progress percent={38} strokeColor="#FF0000"/>
                </div>
                <div>
                    <label className="label">3A1</label>
                    <Progress percent={88} strokeColor="#6470e8" />
                </div>
            </div>
            <div className="divProgress">
                <div>
                    <label className="label">1A2</label>
                    <Progress percent={40} strokeColor="#4A9231"/>
                </div>
                <div>
                    <label className="label">2A2</label>
                    <Progress percent={38} strokeColor="#6470E8"/>
                </div>
                <div>
                    <label className="label">3A2</label>
                    <Progress percent={88} strokeColor="#6470E8" />
                </div>
            </div>
        </div>
        </div>
    )
}
