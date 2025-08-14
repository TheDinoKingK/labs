using System;
using System.ComponentModel.DataAnnotations;

namespace API.DTOs;

public class RegisterDto
{
  [Required]
  public string DisplayName { get; set; } = "";
  [Required]
  [EmailAddress]
  public string Email { get; set; } = "";
// required techincally redudant due to Idenity's strict validation for passwords
  public string Password { get; set; } = "";

  

}
