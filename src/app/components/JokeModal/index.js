import React, { Component } from 'react';

class JokeModal extends Component {
    render() {
        return (
            <div class="modal fade" id="jokeModal" tabindex="-1" role="dialog" aria-labelledby="jokeModal" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                    <div class="modal-header">
                        <div class="content">
                            <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
                            <button type="button" class="btn btn-outline-primary"> Load another joke </button>
                        </div>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <figure>
                            <img src="https://pbs.twimg.com/profile_images/563648681526566912/zP8LPGCu_400x400.jpeg" alt="Uma imagem impressionante" />
                            <figcaption>Legenda para a imagem impressionante</figcaption>
                        </figure>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary"> Previous </button>
                        <button type="button" class="btn btn-primary"> Next </button>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default JokeModal;