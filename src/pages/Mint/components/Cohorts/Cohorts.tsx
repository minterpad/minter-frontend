import { cn } from '@bem-react/classname';
import { Icons } from 'assets';

import './Cohorts.scss';

const CnCohorts = cn('cohorts');

interface ICohortsProps {}

export const Cohorts: React.FC<ICohortsProps> = () => {
    return (
        <div className={CnCohorts()}>
            <div className={CnCohorts('title')}>Cohorts</div>
            <table className={CnCohorts('table')}>
                <thead>
                    <tr>
                        <th>Cohort</th>
                        <th>price</th>
                        <th>limit</th>
                        <th>time to start</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>
                            <div className={CnCohorts('table-name')}>
                                OG
                                <div className={CnCohorts('table-active')}>
                                    Active now
                                </div>
                            </div>
                        </td>
                        <td>0.00004 BTC</td>
                        <td>1</td>
                        <td>07.06.2023</td>
                    </tr>
                    <tr>
                        <td>
                            <div className={CnCohorts('table-name')}>OG</div>
                        </td>
                        <td>0.00004 BTC</td>
                        <td></td>
                        <td>07.06.2023</td>
                    </tr>
                    <tr>
                        <td>
                            <div className={CnCohorts('table-name')}>
                                OG
                                <div className={CnCohorts('table-active')}>
                                    Active now
                                </div>
                            </div>
                        </td>
                        <td>0.00004 BTC</td>
                        <td>NO limit</td>
                        <td>07.06.2023</td>
                    </tr>
                    <tr>
                        <td>
                            <div className={CnCohorts('table-name')}>
                                OG
                                <div className={CnCohorts('table-active')}>
                                    Active now
                                </div>
                            </div>
                        </td>
                        <td>0.00004 BTC</td>
                        <td>NO limit</td>
                        <td>07.06.2023</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};
