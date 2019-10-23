/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react';

export default ({className,style,title}) => {

    return <svg className={className} css={style} width="24px" height="24px" viewBox="0 0 24 24">
                <title>{title}</title>
                <path d="M21.4164055,15.4167742 C21.8418433,14.1920737 22.0549309,12.9658986 22.0549309,11.7404608 C22.0549309,10.4287558 21.8094009,9.17529954 21.3190783,7.97861751 C20.8294931,6.78267281 20.1518894,5.72682028 19.2870046,4.81032258 C18.4221198,3.89603687 17.4414747,3.18525346 16.3465438,2.68092166 C16.3170507,2.82543779 16.3030415,2.94046083 16.3030415,3.02746544 C16.3030415,3.32976959 16.3826728,3.66156682 16.5411982,4.02138249 C16.6997235,4.38193548 16.9157604,4.67023041 17.1900461,4.88626728 C16.9010138,5.08829493 16.6857143,5.35078341 16.5411982,5.6759447 C16.3974194,6.00036866 16.324424,6.32847926 16.324424,6.65880184 C16.324424,6.93382488 16.3752995,7.18599078 16.4763134,7.41603687 C17.2976959,7.04147465 18.2776037,6.85419355 19.4167742,6.85419355 C19.5030415,6.98396313 19.5856221,7.14986175 19.6659908,7.3518894 C19.7441475,7.55317972 19.7839631,7.71907834 19.7839631,7.84884793 C18.8328111,8.00737327 18.0726267,8.29198157 17.5034101,8.70341014 C16.9334562,9.11336406 16.5478341,9.7083871 16.3465438,10.4862673 C16.4763134,11.1498618 16.7756682,11.7264516 17.243871,12.2167742 C17.7120737,12.7063594 18.2562212,13.0676498 18.8763134,13.2976959 C18.8763134,14.2053456 18.9375115,15.0628571 19.0599078,15.8709677 C19.1823041,16.678341 19.3887558,17.5505991 19.6763134,18.4870046 C20.4114286,17.6656221 20.9917051,16.6414747 21.4164055,15.4167742 M12.2919816,20.0980645 C13.0492166,19.5281106 13.6943779,18.8689401 14.2274654,18.1198157 C14.7612903,17.3699539 15.0997235,16.5920737 15.2435023,15.7839631 C14.5231336,14.7030415 13.5601843,13.8204608 12.3568664,13.1347465 C11.1535484,12.4512442 9.76589862,11.9867281 8.19465438,11.7404608 C8.19465438,10.8188018 7.90709677,10.1692166 7.33050691,9.79465438 C6.89769585,9.90967742 6.55115207,10.1264516 6.29235023,10.442765 C6.13308756,10.3992627 5.97898618,10.3026728 5.82709677,10.1515207 C5.6759447,10.0003687 5.57124424,9.83815668 5.51373272,9.66488479 C5.62949309,9.14654378 5.79834101,8.6997235 6.02248848,8.32368664 C6.24516129,7.95059908 6.59465438,7.61142857 7.07023041,7.3083871 C7.38728111,7.33714286 7.72276498,7.46322581 8.0759447,7.68663594 C8.42912442,7.91004608 8.74322581,8.16221198 9.01677419,8.44313364 C9.28958525,8.7240553 9.46285714,8.95852535 9.53585253,9.14654378 L10.0106912,9.14654378 C10.2989862,8.68497696 10.4435023,8.19539171 10.4435023,7.67557604 C10.4435023,7.21400922 10.321106,6.79668203 10.0763134,6.42138249 C9.83078341,6.04682028 9.55723502,5.76589862 9.25419355,5.57788018 C10.2635945,3.97861751 11.9063594,2.86156682 14.1839631,2.22672811 L14.1839631,1.90230415 C13.5498618,1.75926267 12.8147465,1.68626728 11.9786175,1.68626728 C10.436129,1.68626728 8.99834101,2.01437788 7.66525346,2.66986175 C6.33142857,3.32608295 5.20700461,4.19465438 4.29198157,5.27631336 C3.3762212,6.35723502 2.74580645,7.52442396 2.4,8.77788018 C2.71631336,9.57198157 3.19705069,10.2053456 3.83778802,10.681659 C4.48,11.1564977 5.25493088,11.44553 6.16258065,11.5458065 C6.56589862,11.7765899 7.03041475,12.1076498 7.55760369,12.5404608 C8.08331797,12.9740092 8.5043318,13.3485714 8.82211982,13.6656221 C8.49032258,14.0549309 8.20276498,14.4906912 7.95723502,14.9729032 C7.71170507,15.4565899 7.54654378,15.9137327 7.4602765,16.3458065 C7.61880184,16.8221198 7.87760369,17.2401843 8.23815668,17.6 C8.59797235,17.9612903 8.98801843,18.2134562 9.40608295,18.357235 C9.40608295,18.8903226 9.3883871,19.3482028 9.35225806,19.7308756 C9.31539171,20.1120737 9.21806452,20.4475576 9.05953917,20.7358525 C9.11778802,20.9091244 9.23281106,21.0521659 9.40608295,21.1686636 C9.57935484,21.2836866 9.76589862,21.3625806 9.96792627,21.4060829 C10.760553,21.1030415 11.5354839,20.6672811 12.2919816,20.0980645 M6.00036866,22.3786175 C4.16221198,21.2976959 2.70304147,19.8385253 1.62138249,17.9996313 C0.540460829,16.162212 0,14.1625806 0,12 C0,9.83815668 0.540460829,7.83852535 1.62138249,6.00036866 C2.70304147,4.16221198 4.16221198,2.70304147 6.00036866,1.62211982 C7.83778802,0.540460829 9.83741935,0 12,0 C14.1625806,0 16.1629493,0.540460829 18.001106,1.62211982 C19.837788,2.70304147 21.2984332,4.16221198 22.3793548,6.00036866 C23.4602765,7.83852535 24.0007373,9.83815668 24.0007373,12 C24.0007373,14.1625806 23.4602765,16.162212 22.3793548,17.9996313 C21.2984332,19.8385253 19.837788,21.2976959 18.001106,22.3786175 C16.1629493,23.4595392 14.1625806,24 12,24 C9.83741935,24 7.83778802,23.4595392 6.00036866,22.3786175"></path>
            </svg>;

}

