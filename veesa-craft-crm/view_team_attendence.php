<?php



if (session_status() == PHP_SESSION_NONE) {
    session_start();
}


include("conn.php");


if (isset($_GET['id']) && !empty($_GET['id'])) {
    $id = intval($_GET['id']); 

 
    $query = "SELECT * FROM manpower_team_attendence WHERE id = $id";
    $result = mysqli_query($conn, $query);

 
    if (mysqli_num_rows($result) > 0) {
        $row = mysqli_fetch_assoc($result);
    } else {
        echo "Enquiry not found.";
        exit();
    }
} else {
    echo "Invalid enquiry ID.";
    exit();
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>View Enquiry</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
</head>
<body>
    <div class="container mt-5">
        <h3>Attendence Details</h3>
        <table class="table table-bordered">
            <tr>
                <th>Team Name</th>
                <td><?php echo htmlspecialchars($row['team_name']); ?></td>
            </tr>
            <tr>
                <th>Member Name</th>
                <td><?php echo htmlspecialchars($row['member_name']); ?></td>
            </tr>
            <tr>
                <th>Post</th>
                <td><?php echo htmlspecialchars($row['post']); ?></td>
            </tr>
            <tr>
                <th>Date</th>
                <td><?php echo htmlspecialchars($row['date']); ?></td>
            </tr>
            <tr>
                <th>Attendence</th>
                <td><?php echo htmlspecialchars($row['status']); ?></td>
            </tr>
           
        </table>

        <a href="manpower-attendance.php" class="btn btn-secondary">Back to Orders</a>
        <a href="add_team_attendence.php?id=<?php echo $row['id']; ?>" class="btn btn-primary">Edit</a>
    </div>

    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.2/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</body>
</html>
