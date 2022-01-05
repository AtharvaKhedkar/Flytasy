<template>
  <div class="booking">
    <div class="container mt-5 book">
      <div class="row d-flex justify-content-center">
        <div class="col-md-8">
          <div class="bg-white">
            <div class="logo-adj">
              <img alt="flytasy" src="../assets/logo.png" />
            </div>
            <ul class="nav nav-tabs nav-fill" id="myTab" role="tablist">
              <li class="nav-item" role="presentation">
                <button class="nav-link active" id="faq_tab_1-tab" data-bs-toggle="tab" data-bs-target="#faq_tab_1" type="button" role="tab" aria-controls="faq_tab_1" aria-selected="true">
                  <div class="d-flex flex-column lh-lg">
                    <i class="fas fa-plane"></i>
                    <span>Flight</span>
                  </div>
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button v-on:click="bookcab" class="nav-link" id="faq_tab_2-tab" data-bs-toggle="tab" data-bs-target="#faq_tab_2" type="button" role="tab" aria-controls="faq_tab_2" aria-selected="false">
                  <div class="d-flex flex-column lh-lg">
                    <i class="fas fa-car"></i>
                    <span>Book Cab</span>
                  </div>
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button class="nav-link" id="faq_tab_3-tab" data-bs-toggle="tab" data-bs-target="#faq_tab_3" type="button" role="tab" aria-controls="faq_tab_3" aria-selected="false">
                  <div class="d-flex flex-column lh-lg">
                    <i class="fas fa-check-circle"></i>
                    <span>Check-in</span>
                  </div>
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button class="nav-link" id="faq_tab_4-tab" data-bs-toggle="tab" data-bs-target="#faq_tab_4" type="button" role="tab" aria-controls="faq_tab_4" aria-selected="false">
                  <div class="d-flex flex-column lh-lg">
                    <i class="fas fa-hourglass"></i>
                    <span>Flight Status</span>
                  </div>
                </button>
              </li>
            </ul>
            <div class="tab-content" id="myTabContent">
              <div class="tab-pane fade active show" id="faq_tab_1" role="tabpanel" aria-labelledby="faq_tab_1-tab">
                <div class="container p-3">
                  <div class="row">
                    <div class="col-md-6 col-12 mb-4">
                      <div class="d-flex flex-column">
                        <p class="h-crimson">Flight From</p>
                        <input class="form-control" placeholder="City or Airport" type="text">
                      </div>
                    </div>
                    <div class="col-md-6 col-12 mb-4">
                      <div class="d-flex flex-column">
                        <p class="h-crimson">Flight To</p>
                        <input class="form-control" placeholder="City or Airport" type="text">
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6 col-12 mb-4">
                      <div class="d-flex flex-column">
                        <p class="h-crimson">Departure Date</p>
                        <input class="form-control textmuted" type="date">
                      </div>
                    </div>
                    <div class="col-md-6 col-12 mb-4">
                      <div class="d-flex flex-column">
                        <p class="h-crimson">Return Date</p>
                        <input class="form-control textmuted" type="date">
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6 col-12 mb-4">
                      <div class="d-flex flex-column">
                          <p class="h-crimson">Passengers</p>
                          <select class="form-select form-control" id="inputGroupSelect02">
                            <option value="" hidden selected>0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                          </select>
                      </div>
                    </div>
                    <div class="col-md-6 col-12 mb-4">
                      <div class="d-flex flex-column">
                        <p class="h-crimson">Fare Type</p>
                        <select class="form-select form-control" id="inputGroupSelect02">
                          <option value="" hidden selected>Select One</option>
                          <option value="1">Regular</option>
                          <option value="2">Armed Forces</option>
                          <option value="3">Student</option>
                          <option value="4">Senior Citizen</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class="mt-4 d-flex justify-content-center">
                    <button class="btn btn-default custom-button fixup px-5">
                      Show Flights
                    </button>
                  </div>
                </div>
              </div>
              <div class="tab-pane fade" id="faq_tab_2" role="tabpanel" aria-labelledby="faq_tab_2-tab">
                <div class="container p-3 mt-4">
                  <div class="row">
                    <div class="col-md-6 col-12 mb-4">
                      <div class="d-flex flex-column">
                        <p class="h-crimson">Pick-Up Location</p>
                        <input class="form-control" placeholder="Hotel or Airport" type="text" id ="pick">
                      </div>
                    </div>
                    <div class="col-md-6 col-12 mb-4">
                      <div class="d-flex flex-column">
                        <p class="h-crimson">Drop Location</p>
                        <input class="form-control" placeholder="Hotel or Airport" type="text" id="drop">
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6 col-12 mb-4">
                      <div class="d-flex flex-column">
                        <p class="h-crimson">Date</p>
                        <input class="form-control textmuted" type="date">
                      </div>
                    </div>
                    <div class="col-md-6 col-12 mb-4">
                      <div class="d-flex flex-column">
                        <p class="h-crimson">Time</p>
                        <input class="form-control textmuted" type="time">
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6 col-12 mb-4">
                      <div class="d-flex flex-column">
                          <p class="h-crimson">Occupants</p>
                          <select class="form-select form-control" id="inputGroupSelect02">
                            <option value="" hidden selected>0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                          </select>
                      </div>
                    </div>
                    <div class="col-md-6 col-12 mb-4">
                      <div class="d-flex flex-column">
                        <p class="h-crimson">Cab Type</p>
                        <select class="form-select form-control" id="inputGroupSelect02">
                          <option value="" hidden selected>Select One</option>
                          <option value="1">2-Seaters</option>
                          <option value="2">4-Seaters</option>
                          <option value="3">6-Seaters</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class="mt-4 d-flex justify-content-center">
                    <button class="btn btn-default custom-button fixup px-5">
                      Book Cab
                    </button>
                  </div>
                </div>
              </div>
              <div class="tab-pane fade" id="faq_tab_3" role="tabpanel" aria-labelledby="faq_tab_3-tab">
                <div class="container p-3 mt-4">
                  <div class="row">
                    <div class="col-md-6 col-12 mb-4">
                      <div class="d-flex flex-column">
                        <p class="h-crimson">City</p>
                        <input class="form-control" placeholder="City" type="text">
                      </div>
                    </div>
                    <div class="col-md-6 col-12 mb-4">
                      <div class="d-flex flex-column">
                        <p class="h-crimson">Location</p>
                        <input class="form-control" placeholder="Area or Locality" type="text">
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6 col-12 mb-4">
                      <div class="d-flex flex-column">
                          <p class="h-crimson">Rooms</p>
                          <select class="form-select form-control" id="inputGroupSelect02">
                            <option value="" hidden selected>0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                          </select>
                      </div>
                    </div>
                    <div class="col-md-6 col-12 mb-4">
                      <div class="d-flex flex-column">
                        <p class="h-crimson">Members</p>
                        <select class="form-select form-control" id="inputGroupSelect02">
                          <option value="" hidden selected>Select One</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                          <option value="4">Four</option>
                          <option value="5">Five</option>
                          <option value="6">Six</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class="mt-4 d-flex justify-content-center">
                    <button class="btn btn-default custom-button fixup px-5">
                      Search Hotels
                    </button>
                  </div>
                </div>
              </div>
              <div class="tab-pane fade" id="faq_tab_4" role="tabpanel" aria-labelledby="faq_tab_4-tab">
                <div class="container p-3">
                  <div class="row">
                    <div class="col-md-6 col-12 mb-4">
                      <div class="d-flex flex-column">
                        <p class="h-crimson">Select Airline</p>
                        <select class="form-select form-control" id="inputGroupSelect02">
                          <option value="" hidden selected>Select One</option>
                          <option value="1">Indigo</option>
                          <option value="2">Air India</option>
                          <option value="3">Air Asthana</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-md-6 col-12 mb-4">
                      <div class="d-flex flex-column">
                        <p class="h-crimson">Flight Number</p>
                        <div class="input-group mb-3">
                          <input class="form-control" placeholder="Flight Number" type="text">
                          <button class="btn custom-btn fixup" type="button">Search</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Booking",
  methods: {
    async bookcab () {
const droplat = 13.198488554690893;
  const droplong = 77.70700049280083;
  const picklat = 13.099309594833942;
  const picklong = 77.62717148588415;
  return `https://book.olacabs.com/?lat=${picklat}&lng=${picklong}&drop_lat=${droplat}&drop_lng=${droplong}&when=later&dsw=yes`;
  }
}



</script>

<style scoped>
.booking {
  margin: 0 15px;
}

.logo-adj {
  margin-left: auto;
  margin-right: auto;
  width: 100px;
}

.logo-adj img {
  height: 100px;
  width: 100px;
}

::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #888;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}

.nav-tabs .nav-link.active {
  background-color: #fff !important;
  border-bottom: 4px solid #ff2442 !important;
  border-color: transparent;
  color: #ff2442 !important;
}

.nav-fill .nav-item .nav-link,
.nav-justified .nav-item {
  padding: 0;
}

.nav-fill .nav-item .nav-link,
.nav-justified .nav-item .nav-link {
  color: #2c3e50;
  font-size: 16px;
  font-weight: 600;
  width: 100%;
}

.nav-tabs .nav-link {
  border-top-left-radius: 0rem !important;
  border-top-right-radius: 0rem !important;
}

.nav-tabs .nav-link.active {
  background-color: #ff2442;
  border-color: transparent;
  color: #fff;
  font-weight: 600;
}

.nav-link {
  background-color: #fff;
  font-size: 13px;
  height: 77px;
}

.nav-link:hover {
  border: none;
}

.nav-link:focus {
  outline: none;
}

.tab-pane {
  height: 300px;
}

.form-control {
  height: 40px;
  position: relative;
}

.form-control:focus {
  border: 1px solid #ff2442;
  box-shadow: none;
  outline: none;
}

.h-crimson {
  color: #ff2442;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 0;
  padding-left: 3px;
}

.flight-where-from:after {
  border-radius: 50%;
  content: "23";
  height: 20px;
  position: absolute;
  width: 20px;
}

.custom-button {
  background-size: 300% 100%;
  border: none;
  border-radius: 50px;
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  height: 55px;
  margin: 20px;
  text-align: center;
  width: 200px;
  -moz-transition: all 0.4s ease-in-out;
  -o-transition: all 0.4s ease-in-out;
  -webkit-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;
}

.custom-button:hover {
  background-position: 100% 0;
  -moz-transition: all 0.4s ease-in-out;
  -o-transition: all 0.4s ease-in-out;
  -webkit-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;
}

.custom-button:focus {
  outline: none;
}

.custom-button.fixup {
  background-image: linear-gradient(
    to right,
    #eb3941,
    #f15e64,
    #e14e53,
    #e2373f
  );
  box-shadow: 0 5px 15px rgba(242, 97, 103, 0.4);
}

.custom-btn {
  background-size: 300% 100%;
  border: none;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  height: 40px;
  text-align: center;
  -moz-transition: all 0.4s ease-in-out;
  -o-transition: all 0.4s ease-in-out;
  -webkit-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;
}

.custom-btn:hover {
  background-position: 100% 0;
  -moz-transition: all 0.4s ease-in-out;
  -o-transition: all 0.4s ease-in-out;
  -webkit-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;
}

.custom-btn:focus {
  outline: none;
}

.custom-btn.fixup {
  background-image: linear-gradient(
    to right,
    #eb3941,
    #f15e64,
    #e14e53,
    #e2373f
  );
  box-shadow: 0 5px 15px rgba(242, 97, 103, 0.4);
}

.scroll-y {
  height: 300px;
  overflow-y: scroll;
}
</style>
