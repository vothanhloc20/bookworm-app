import * as React from 'react';
import {Button} from 'react-bootstrap';
import ListProduct from '../../base/ListProduct/ListProduct.js';

class FeaturedBooks extends React.Component {
    render() {
        return (
            <>
                <div className="text-center mb-4">
                    <h4 className="font-weight-semi mb-4">
                        Featured Books
                    </h4>
                    <Button variant="blue" className="font-weight-semi">
                        Recommended
                    </Button>
                    <Button variant="link" className="font-weight-semi">
                        Popular
                    </Button>
                </div>
                <ListProduct customClass="pb-1 mb-4 align-items-stretch" />
            </>
        )
    }
}

export default FeaturedBooks;
