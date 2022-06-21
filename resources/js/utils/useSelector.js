export const mapStateToProps = (state) => {
    return {
        modal: state.modal,
        filter: state.filter,
        home: state.home,
    };
};
