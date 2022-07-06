import * as React from "react";
import * as yup from "yup";

import { Button, Card, Form } from "react-bootstrap";

import Notiflix from "notiflix";
import Swal from "sweetalert2";
import TextField from "../../base/TextField/TextField.js";
import { createNewReview } from "../../../adapters/ProductAdapter/ProductAdapter.js";
import { ratingStar } from "../../../../assets/data/ratingstar.js";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup
    .object({
        review_title: yup
            .string()
            .min(12, "Title must be at least 12 characters")
            .max(120, "Title must be at most 120 characters")
            .required("Required"),
        rating_star: yup.number().positive().integer().required("Required"),
    })
    .required();

function FormReview({ bookId }) {
    const {
        register,
        handleSubmit,
        resetField,
        control,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = async (data) => {
        const review = Object.assign({}, data);
        review.book_id = bookId;
        Notiflix.Block.hourglass("#form-review", "Please wait...", {
            backgroundColor: "rgba(239, 244, 251, 0.91)",
            messageColor: "#739dd8",
            svgColor: "#739dd8",
            fontWeight: "700",
        });
        const result = await createNewReview(review);
        if (result.status === "success") {
            let timer = 5;
            Notiflix.Block.remove("#form-review");
            setTimeout(() => {
                Swal.close();
                window.location.reload();
            }, 5000);
            Swal.fire({
                title: "<h4 class='text-blue font-weight-semi'>Submit review successfully</h4>",
                html: "This page will reload after <b></b> seconds",
                icon: "success",
                allowOutsideClick: false,
                allowEscapeKey: false,
                showConfirmButton: false,
                timer: 5000,
                didOpen: () => {
                    const b = Swal.getHtmlContainer().querySelector("b");
                    b.textContent = 5;
                    timer = setInterval(() => {
                        b.textContent = Math.abs(
                            Swal.getTimerLeft() / 1000
                        ).toFixed(0);
                    }, 500);
                },
            });
        }
        if (result.status_code && result.status_code === "422") {
            Notiflix.Block.remove("#form-review");
        }
    };

    const resetForm = () => {
        resetField("title");
        resetField("rating_star");
    };

    return (
        <Form id="form-review" onSubmit={handleSubmit(onSubmit)}>
            <Card>
                <Card.Header className="bg-blue">
                    <h6 className="text-white font-weight-semi">
                        Write a Review
                    </h6>
                </Card.Header>
                <Card.Body>
                    <TextField
                        label="Add a title"
                        type="text"
                        mandatory={true}
                        select={false}
                        message={errors.review_title?.message}
                        {...register("review_title")}
                        name="review_title"
                    />
                    <TextField
                        label="Details please! Your review helps other shoppers"
                        type="text"
                        kind="textarea"
                        {...register("review_details")}
                        name="review_details"
                        select={false}
                    />
                    <TextField
                        label="Select a rating star"
                        type="text"
                        select={true}
                        mandatory={true}
                        isClearable={true}
                        values={ratingStar}
                        message={errors.rating_star?.message}
                        control={control}
                        name="rating_star"
                        {...register("rating_star")}
                    />
                    <small className="text-red d-flex flex-column">
                        <i>* is mandatory</i>
                        <i>* Title must be between 12 and 120 in length</i>
                    </small>
                </Card.Body>
                <Card.Footer>
                    <Button
                        variant="blue"
                        block
                        className="font-weight-semi"
                        type="submit"
                    >
                        Submit Review
                    </Button>
                </Card.Footer>
            </Card>
        </Form>
    );
}

export default FormReview;
