<div class="main">
        <div class="container">
            <form method="POST" class="appointment-form" id="appointment-form">
                <h2>Creaat Akun</h2>
                <div class="form-group-1">
                    <input type="text" name="title" id="title" placeholder="Nama" required />
                    <input type="email" name="email" id="email" placeholder="Email" required />
                    <input type="date" name="name" id="name" placeholder="tanggal Lahir" required />
                    <input type="number" name="phone_number" id="phone_number" placeholder="No Telpon" required />
                    <!-- <div class="select-list"> -->
                        <!-- <select name="course_type" id="course_type">
                            <option slected value="">Hoby</option>
                            <option value="society">Soci</option>
                            <option value="language">Language</option>
                        </select> -->
                    <!-- </div> -->
                </div>
                <!-- <div class="form-group-2">
                    <h3>How would you like to bo located ?</h3>
                    <div class="select-list">
                        <select name="confirm_type" id="confirm_type">
                            <option seleected value="">By phone</option>
                            <option value="by_email">By email</option>
                        </select>
                    </div>
                    <div class="select-list">
                        <select name="hour_appointment" id="hour_appointment">
                            <option seleected value="">Hours : 8am 10pm</option>
                            <option value="9h-11h">Hours : 9am 11pm</option>
                        </select>
                    </div>
                </div> -->
                <div class="form-check">
                    <input type="checkbox" name="agree-term" id="agree-term" class="agree-term" />
                    <label for="agree-term" class="label-agree-term"><span><span></span></span>I agree to the  <a href="#" class="term-service">Terms and Conditions</a></label>
                </div>
                <div class="form-submit">
                    <input type="submit" name="submit" id="submit" class="submit" value="Creat Akun" />
                </div>
            </form>
        </div>
    </div>