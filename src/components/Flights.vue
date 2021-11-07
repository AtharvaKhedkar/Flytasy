<template>
    <div class="flights">
        <div class="container p-3 scroll-y">
            <div class="p-3 d-flex justify-content-between align-items-center">
                <div class="d-flex flex-column"> 
                    <span>Departure</span>
                    <div class="d-flex justify-content-between align-items-center"> 
                        <span>DAC</span>
                        <i class='fas fa-plane ms-3 me-3 text-warning'></i>
                        <span>JKF</span>
                    </div>
                </div>
                <div>
                    <span>3 hours 22 minutes</span>
                </div>
            </div>
            <div class="border-top p-3 d-flex justify-content-between align-items-center">
                <div class="d-flex flex-column">
                    <span>Departure</span>
                    <div class="d-flex justify-content-between align-items-center"> 
                        <span>TUM</span>
                        <i class='fas fa-plane ms-3 me-3 text-warning'></i>
                        <span>DEL</span>
                    </div>
                </div>
                <div>
                    <span>13 hours 12 minutes</span>
                </div>
            </div>
            <div class="border-top p-3 d-flex justify-content-between align-items-center">
                <div class="d-flex flex-column">
                    <span>Departure</span>
                    <div class="d-flex justify-content-between align-items-center">
                        <span>KMD</span>
                        <i class='fas fa-plane ms-3 me-3 text-warning'></i>
                        <span>MUM</span>
                    </div>
                </div>
                <div>
                    <span>5 hours 12 minutes</span>
                </div>
            </div>
            <div class="border-top p-3 d-flex justify-content-between align-items-center">
                <div class="d-flex flex-column">
                    <span>Departure</span>
                    <div class="d-flex justify-content-between align-items-center">
                        <span>GOA</span>
                        <i class='fas fa-plane ms-3 me-3 text-warning'></i>
                        <span>NPU</span>
                    </div>
                </div>
                <div>
                    <span>8 hours 12 minutes</span>
                </div>
            </div>
            <div class="border-top p-3 d-flex justify-content-between align-items-center">
                <div class="d-flex flex-column">
                    <span>Departure</span>
                    <div class="d-flex justify-content-between align-items-center">
                        <span>SGR</span>
                        <i class='fas fa-plane ms-3 me-3 text-warning'></i>
                        <span>NYC</span>
                    </div>
                </div>
                <div>
                    <span>13 hours 12 minutes</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "Flights",
};
</script>

<style scoped>
.flights {
    margin: 0 15px;
}

.container {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    margin: 0 auto;
    max-width: 800px;
}
</style>