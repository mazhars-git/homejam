import React from 'react';

const ProgressBar = () => {
    var containerStyle = {
        width: '200px',
        height: '200px'
    };

    return (
        <div>
            <Circle
                progress={this.state.progress}
                text={'test'}
                options={options}
                initialAnimate={true}
                containerStyle={containerStyle}
                containerClassName={'.progressbar'} />
        </div>
    );
};

export default ProgressBar;